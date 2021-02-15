# music_controller

A music controller website built with Django and React.

## How to set it up

```
$ cd ~/Desktop
$ git clone https://github.com/yangjialin94/music_controller.git
```
### Terminal 1
```
$ cd music_controller
$ pipenv shell
$ pip3 install django
$ python3 manage.py migrate
$ python3 manage.py createsuperuser
$ python3 manage.py runserver
```

### Terminal 2
```
$ cd music_controller/frontend
$ npm install
$ npm run dev
```

## URLs

Home Page: http://127.0.0.1:8000/  
Admin Page: http://127.0.0.1:8000/admin/
Create Table Page: http://127.0.0.1:8000/api/create-room/
Create Room Page: http://127.0.0.1:8000/create/

## Author

* **[Jialin Yang](https://github.com/yangjialin94)** - [10xCoding](10xcoding.com)
