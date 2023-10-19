## Docker Compose Setup

### First time run

        docker-compose build
        docker-compose up
        docker-compose run --rm web rails db:setup

### Update of migrations/seeds only

        docker-compose run --rm web rails db:migrate
        docker-compose run --rm web rails db:seed

### Updating of gems/packages

        docker-compose run --rm web bundle install
        docker-compose run --rm web yarn
