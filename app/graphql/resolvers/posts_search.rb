require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers
  class PostsSearch < GraphQL::Schema::Resolver
    include SearchObject.module(:graphql)

    DEFAULT_PER_PAGE = 5

    scope { Prismic::Post.all.order(created_at: :desc) }

    type Types::Prismic::PostType.collection_type, null: false

    option :limit, type: ::Types::Arguments::LimitInput, with: :apply_limit, default: { limit: DEFAULT_PER_PAGE }

    def apply_limit(scope, value)
      scope.limit(value[:limit] || DEFAULT_PER_PAGE)
    end
  end
end
