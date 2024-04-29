require 'google/apis/youtube_v3'

class MotoController < ApplicationController
    def index
        # Set up the YouTube service
        youtube = Google::Apis::YoutubeV3::YouTubeService.new
        youtube.key = ENV['YOUTUBE_DATA_API_KEY'] # Accessing the API key from environment variables

        # Call the method to fetch all videos from a playlist
        playlist_id = ENV['PLAYLIST_ID']
        videos_response = fetch_all_playlist_videos(youtube, playlist_id)

        # Extract video information from the response
        if videos_response.items.any?
            videos = videos_response.items.map do |item|
                # Extract video details
                title = item.snippet.title
                position = item.snippet.position
                video_id = item.snippet.resource_id.video_id
                url = video_url(video_id)
                thumbnail = get_highest_quality_thumbnail(item.snippet.thumbnails)
                description = filter_description(item.snippet.description)
                location = get_video_location(youtube, video_id)
                # Prepare JSON format
                {
                    title: title,
                    position: position,
                    url: url,
                    thumbnail: thumbnail,
                    description: description,
                    location: location
                }
            end

            render json: { videos: videos }
        else
            render json: { error: 'No videos found in the playlist.' }, status: :not_found
        end
    end

    private

    # Method to fetch all videos from a playlist recursively
    def fetch_all_playlist_videos(youtube, playlist_id, next_page_token = nil, all_videos = [])
        response = youtube.list_playlist_items('snippet', playlist_id: playlist_id, page_token: next_page_token)

        # Add current page's videos to the list
        all_videos.concat(response.items)

        # If there are more pages, recursively fetch them
        if response.next_page_token
            fetch_all_playlist_videos(youtube, playlist_id, response.next_page_token, all_videos)
        else
            # Return all videos when no more pages are available
            OpenStruct.new(items: all_videos)
        end
    end

    # Method to fetch the location of a video
    def get_video_location(youtube, video_id)
        youtube.list_videos('recordingDetails', id: video_id).items.first.recording_details.location_description
    end

    # Method to get the highest quality thumbnail URL
    def get_highest_quality_thumbnail(thumbnails)
        %w(maxres high medium standard default).each do |quality|
            return thumbnails.public_send(quality).url if thumbnails.public_send(quality)&.url
        end
        nil
    end

    def filter_description(description)
        # Define the array of patterns to remove
        patterns = [
            /(\*{12}DISCLAIMER\*{12}).*?\"\w+\", you can \"\w+\" use my footage for your video, compilation, etc./m,
            'Shot on a closed private road, additional vehicles are stunt actors.',
            '************DISCLAIMER************',
            "\n"
        ]
    
        # Iterate over the patterns and perform the substitutions
        patterns.each do |pattern|
            description = description.gsub(pattern, '').strip
        end
    
        description
    end

    def video_url(video_id)
        "https://www.youtube.com/watch?v=#{video_id}"
      end
    
end
