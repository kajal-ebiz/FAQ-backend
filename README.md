## FAQ Backend Quick start guide

# Version info

node : 14.18.0
npm : 6.14.15

# Install sequelize-cli-typescript globally using npm

npm install -g sequelize-cli-typescript

## Create, migrate and seed database using below commands

npx sequelize-cli-typescript db:create
npx sequelize-cli-typescript db:migrate
npx sequelize-cli-typescript db:seed:all

## Start development server on port 8000

npm run dev
