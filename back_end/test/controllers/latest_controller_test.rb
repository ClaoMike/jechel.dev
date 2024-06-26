require "test_helper"

class LatestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get latest_index_url
    assert_response :success
  end
end
