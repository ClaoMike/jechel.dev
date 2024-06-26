# app/controllers/moto_controller.rb
class MotoController < ApplicationController
    include YoutubeHelper
  
    def index
      youtube = Google::Apis::YoutubeV3::YouTubeService.new
      youtube.key = ENV['YOUTUBE_DATA_API_KEY']
  
      playlist_id = ENV['PLAYLIST_ID']
      videos_response = fetch_all_playlist_videos(youtube, playlist_id)
  
      if videos_response.items.any?
        first_video = extract_video_details(youtube, videos_response.items.first)
        remaining_videos = videos_response.items[1..].reverse.map do |item|
          extract_video_details(youtube, item)
        end
  
        render json: { videos: [first_video] + remaining_videos }
      else
        render json: { error: 'No videos found in the playlist.' }, status: :not_found
      end
    end
  end
  