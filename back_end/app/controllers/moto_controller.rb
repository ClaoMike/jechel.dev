# app/controllers/moto_controller.rb
require 'google/apis/youtube_v3'

class MotoController < ApplicationController
    def index
        # Set up the YouTube service
        youtube = Google::Apis::YoutubeV3::YouTubeService.new
        youtube.key = ENV['YOUTUBE_DATA_API_KEY'] # Accessing the API key from environment variables

        # Call the method to fetch videos from a playlist
        playlist_id = ENV['PLAYLIST_ID']
        videos_response = fetch_playlist_videos(youtube, playlist_id)

        # Extract video information from the response
        if videos_response.items.any?
        #   videos = videos_response.items.map do |item|
        #     {
        #       title: item.snippet.title,
        #       video_id: item.snippet.resource_id.video_id
        #     }
        #   end
            render json: { videos: videos_response }

            # render json: { videos: videos }
        else
            render json: { error: 'No videos found in the playlist.' }, status: :not_found
        end
    end

    private

    # Method to fetch videos from a playlist
    def fetch_playlist_videos(youtube, playlist_id)
        youtube.list_playlist_items('snippet', playlist_id: playlist_id)
    end

end
