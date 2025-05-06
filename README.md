# 12 
- npm install -D tailwindcss@
- npm install -D daisyui@4.12.23
- npx tailwindcss -i ./contacts/static/css/input.css -o ./contacts/static/css/output.css
- to minify the css
    `npx tailwindcss -i ./contacts/static/css/input.css -o ./contacts/static/css/output.css --minify`

- To create virtual environment
` python -m venv ./venv-htmx`

- Activate Script
`.\venv-htmx\Scripts\activate`

- Get inside project
`cd .\htmx-contacthub\`

- install requirements packages
`pip install -r .\requirement.txt`

- 
For settign up db
` python .\manage.py migrate`

- run the server
`python manage.py runserver`

# 3
- whenever you change models.py, run the migratuioin to make a table
`python manage.py makemigrations`
