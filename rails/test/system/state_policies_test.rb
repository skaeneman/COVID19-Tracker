require "application_system_test_case"

class StatePoliciesTest < ApplicationSystemTestCase
  setup do
    @state_policy = state_policies(:one)
  end

  test "visiting the index" do
    visit state_policies_url
    assert_selector "h1", text: "State Policies"
  end

  test "creating a State policy" do
    visit state_policies_url
    click_on "New State Policy"

    click_on "Create State policy"

    assert_text "State policy was successfully created"
    click_on "Back"
  end

  test "updating a State policy" do
    visit state_policies_url
    click_on "Edit", match: :first

    click_on "Update State policy"

    assert_text "State policy was successfully updated"
    click_on "Back"
  end

  test "destroying a State policy" do
    visit state_policies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "State policy was successfully destroyed"
  end
end
