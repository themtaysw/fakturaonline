FROM timbru31/ruby-node

RUN mkdir -p /app

WORKDIR /app

ENV HOME=/app PATH=/app/bin:$PATH

COPY Gemfile* /app/

RUN gem install bundler && bundle install --jobs 20 --retry 5

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn
