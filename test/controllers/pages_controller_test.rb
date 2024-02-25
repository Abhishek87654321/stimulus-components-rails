# frozen_string_literal: true

require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get home' do
    get pages_home_url
    assert_response :success
  end

  test 'should get index' do
    get root_path
    assert_response :success
  end
end
