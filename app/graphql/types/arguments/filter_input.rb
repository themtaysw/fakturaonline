module Types
  module Arguments
    class FilterInput < ::Types::BaseInputObject
      description "FilterInput"

      argument :fulltext, String, required: false
      argument :unpaid, Boolean, required: false
    end
  end
end
