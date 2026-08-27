#!/usr/bin/env bash
set -o errexit
echo "=== BUILD START ==="


echo "=== INSTALLING DEPENDENCIES ==="
pip install -r requirements.txt

echo "=== RUNNING MIGRATIONS ==="
python manage.py migrate
echo "=== CLEARING PRODUCTS ==="
python manage.py shell -c "from products.models import Product; Product.objects.all().delete()"
echo "=== LOADING PRODUCTS FIXTURE ==="
python manage.py loaddata products
echo "=== COLLECTING STATIC FILES ==="
python manage.py collectstatic --noinput

echo "=== BUILD COMPLETE ==="