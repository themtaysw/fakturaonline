# frozen_string_literal: true

module Types
  class Prismic::PostType < Types::BaseObject
    field :id, ID, null: false
    field :uid, String
    field :author, String
    field :slug, String
    field :date, GraphQL::Types::ISO8601Date
    field :title, String
    field :perex, String
    field :main_image, String
    field :small_image, String
    field :body, String
    field :category_slug, String
    field :sub_category_slug, String
    field :locale, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :path, String

    def path
      object.slug
    end
  end
end
