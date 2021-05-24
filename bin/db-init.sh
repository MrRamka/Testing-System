if [ "$(psql -tAc "SELECT 1 FROM pg_database WHERE datname='$DATABASE_NAME'")" = '1' ]; then
  echo "1. Database already exists"
  exit
else
  echo "0. Database does not exist"
  echo "1. Creating database"
  psql -U postgres -c "CREATE DATABASE $DATABASE_NAME OWNER $DATABASE_USER;"
fi
