module Types
  module Arguments
    class PaginationInput < ::Types::BaseInputObject
      description "PaginationInput"

      argument :page, Integer, required: false
    end
  end
end
