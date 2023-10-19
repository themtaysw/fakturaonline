module Types
  module Arguments
    class LimitInput < ::Types::BaseInputObject
      description "LimitInput"

      argument :limit, Integer, required: false
    end
  end
end
