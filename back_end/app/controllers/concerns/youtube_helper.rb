# app/controllers/concerns/youtube_helper.rb
module YoutubeHelper
    extend ActiveSupport::Concern
  
    def fetch_all_playlist_videos(youtube, playlist_id, next_page_token = nil, all_videos = [])
      response = youtube.list_playlist_items('snippet', playlist_id: playlist_id, page_token: next_page_token)
  
      all_videos.concat(response.items)
  
      if response.next_page_token
        fetch_all_playlist_videos(youtube, playlist_id, response.next_page_token, all_videos)
      else
        OpenStruct.new(items: all_videos)
      end
    end
  
    def extract_video_details(youtube, item)
      title = item.snippet.title
      position = item.snippet.position
      video_id = item.snippet.resource_id.video_id
      url = video_url(video_id)
      thumbnail = get_highest_quality_thumbnail(item.snippet.thumbnails)
      description = filter_description(item.snippet.description)
      location = get_video_location(youtube, video_id)
  
      {
        title: title,
        position: position,
        url: url,
        thumbnail: thumbnail,
        description: description,
        location: location
      }
    end
  
    def get_video_location(youtube, video_id)
      youtube.list_videos('recordingDetails', id: video_id).items.first.recording_details.location_description
    end
  
    def get_highest_quality_thumbnail(thumbnails)
      %w(maxres high medium standard default).each do |quality|
        return thumbnails.public_send(quality).url if thumbnails.public_send(quality)&.url
      end
      nil
    end
  
    def filter_description(description)
      patterns = [
        /(\*{12}DISCLAIMER\*{12}).*?\"\w+\", you can \"\w+\" use my footage for your video, compilation, etc./m,
        'Shot on a closed private road, additional vehicles are stunt actors.',
        '************DISCLAIMER************',
        "\n"
      ]
  
      patterns.each do |pattern|
        description = description.gsub(pattern, '').strip
      end
  
      description
    end
  
    def video_url(video_id)
      "https://www.youtube.com/watch?v=#{video_id}"
    end
  end
  