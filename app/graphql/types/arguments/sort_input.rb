module Types
  module Arguments
    class SortInput < ::Types::BaseInputObject
      description "SortInput"

      argument :attribute, String, required: false
      argument :direction, String, required: false
    end
  end
end
