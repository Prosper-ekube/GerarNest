#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt

python manage.py migrate
python manage.py shell -c "from products.models import Product; Product.objects.all().delete()"
python manage.py loaddata products
python manage.py collectstatic --noinput