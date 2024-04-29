require 'google/apis/youtube_v3'

class MotoController < ApplicationController
    def index
        # Set up the YouTube service
        youtube = Google::Apis::YoutubeV3::YouTubeService.new
        youtube.key = ENV['YOUTUBE_DATA_API_KEY'] # Accessing the API key from environment variables

        # Call the method to fetch all videos from a playlist
        playlist_id = ENV['PLAYLIST_ID']
        videos_response = fetch_all_playlist_videos(youtube, playlist_id)

        # render json: { videos: videos_response }

        # Extract video information from the response
        if videos_response.items.any?
            videos = videos_response.items.map do |item|
                # Extract video details
                {
                    title: item.snippet.title,
                    position: item.snippet.position,
                    video_id: item.snippet.resource_id.video_id,
                    url: "https://www.youtube.com/watch?v=#{item.snippet.resource_id.video_id}",
                    thumbnail: item.snippet.thumbnails.high.url,
                    description: item.snippet.description,
                    location: get_video_location(youtube, item.snippet.resource_id.video_id).items.first.recording_details.location_description
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

    def get_video_location(youtube, video_id)
        youtube.list_videos('recordingDetails', id: video_id)
    end

end
