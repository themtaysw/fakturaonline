module Prismic
  class Post < ApplicationRecord
    self.table_name  = :prismic_posts

    scope :ordered, -> { order(created_at: :desc) }

    def main_image
      image
    end

    def small_image
      image+"&w=600" if image
    end
  end
end
