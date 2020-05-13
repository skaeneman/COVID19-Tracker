require 'test_helper'

class StatePoliciesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @state_policy = state_policies(:one)
  end

  test "should get index" do
    get state_policies_url
    assert_response :success
  end

  test "should get new" do
    get new_state_policy_url
    assert_response :success
  end

  test "should create state_policy" do
    assert_difference('StatePolicy.count') do
      post state_policies_url, params: { state_policy: {  } }
    end

    assert_redirected_to state_policy_url(StatePolicy.last)
  end

  test "should show state_policy" do
    get state_policy_url(@state_policy)
    assert_response :success
  end

  test "should get edit" do
    get edit_state_policy_url(@state_policy)
    assert_response :success
  end

  test "should update state_policy" do
    patch state_policy_url(@state_policy), params: { state_policy: {  } }
    assert_redirected_to state_policy_url(@state_policy)
  end

  test "should destroy state_policy" do
    assert_difference('StatePolicy.count', -1) do
      delete state_policy_url(@state_policy)
    end

    assert_redirected_to state_policies_url
  end
end
