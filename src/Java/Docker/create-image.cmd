docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bekap4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t bekap4-java/app ../../..
