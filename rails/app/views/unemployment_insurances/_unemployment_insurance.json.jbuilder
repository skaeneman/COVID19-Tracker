json.extract! unemployment_insurance, :id, :user_policy_id, :no_ui_waiting_period, :waived_ui_waiting_period, :waived_work_search_for_ui, :expand_ui_to_quarantined_people, :expand_ui_for_lost_childcare_or_school_closures, :extended_time_for_people_on_ui, :paid_sick_leave, :created_at, :updated_at
json.url unemployment_insurance_url(unemployment_insurance, format: :json)
