<template>
  <div
    ref="elementRef"
    :class="{ 'block__content': onHp }"
  >
    <div
      class="row row--flex block"
      v-if="isDataLoaded && hasAnyPosts"
    >
      <h2>
        {{ $t('blog.title') }}
      </h2>

      <div
        v-for="post in collection"
        :key="post.uid"
        class="blog-cart__wrapper"
      >
        <a
          :href="post.path"
          class="blog-cart"
        >
          <div class="blog-cart__img">
            <img
              :src="post.smallImage"
              :alt="post.title"
              width="500"
              height="280"
            >
          </div>
          <div class="blog-cart__content">
            <h3 class="h3">
              {{ post.title }}
            </h3>
            <div class="blog-cart__date">
              {{ $t('blog.published') }} {{ post.createdAt | formatDate('dd. MM. yyyy') }}
            </div>
            <p>{{ post.perex }}</p>
            <div class="blog-cart__cta">
              {{ $t('blog.read') }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { POSTS_QUERY } from '~/queries';

export default {
  props: {
    postsCount: {
      default: 6,
      type: Number,
    },
    onHp: {
      default: false,
      type: Boolean,
    },
  },
  apollo: {
    posts: {
      query: POSTS_QUERY,
      variables() {
        return {
          limit: this.postsCount,
        };
      },
      result() {
        this.isDataLoaded = true;
      },
      skip() {
        return this.skipQuery;
      },
    },
  },
  data: () => ({
    isDataLoaded: false,
    isInViewport: false,
    skipQuery: true,
  }),
  computed: {
    collection() {
      return this.posts.collection;
    },
    hasAnyPosts() {
      return this.collection.length > 0;
    },
  },
  methods: {
    getArticleImg(article) {
      return article.data.featured_image.url;
    },
    getArticleTitle(article) {
      return article.data.title[0].text;
    },
    onIntersection(entries) {
      const [entry] = entries;
      if (entry.isIntersecting && !this.isDataLoaded) {
        this.fetchPosts();
      }
    },
    fetchPosts() {
      this.skipQuery = false;
      this.$apollo.queries.posts.refetch();
    },
  },
  mounted() {
    const offsets = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(this.onIntersection, offsets);

    observer.observe(this.$refs.elementRef);
  },
};
</script>

<style lang="scss" scoped>
  .blog {
    background-color: #f4f9fb;
  }

  h2 {
    font-size: 2.13rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .blog-cart__wrapper {
    position: relative;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;

    @media (max-width: 1200px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .blog-cart {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.86rem;
    text-decoration: none;
    color: #333333;
  }

  .blog-cart__content {
    padding: 2.33rem 2.66rem;
    background: #ffffff;
    flex: 0 0 70%;
    max-width: 70%;
    border-radius: 0 4px 4px 0;

    @media (max-width: 1200px) {
      flex: 0 0 100%;
      max-width: 100%;
      border-radius: 0 0 4px 4px;
    }

    @media (max-width: 480px) {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

  .blog-cart__img {
    flex: 0 0 30%;
    max-width: 30%;
    position: relative;
    background-color: #c4e4f3;
    border-radius: 4px 0 0 4px;
    @media (max-width: 1200px) {
      flex: 0 0 100%;
      max-width: 100%;
      border-radius: 4px 4px 0 0;
    }

    img {
      margin: 0 auto;
      display: table;
      @media (min-width: 1200px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .more-articles {
    display: inline-block;
    text-align: right;
    width: 100%;
  }

  .blog-cart__cta {
    color: #2980b9;
  }

  .h3 {
    margin-top: 0;
    margin-bottom: 0.33rem;
    color: #057ec2;
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: underline;
  }

  .blog-cart__date {
    margin-bottom: 1em;
    font-size: .8rem;
  }

  .vue-content-placeholders-img {
    height: 100%;
  }
</style>
