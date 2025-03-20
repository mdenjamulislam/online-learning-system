from flask import Flask, jsonify,  request
from flask_cors import CORS
import pymysql.cursors

app = Flask(__name__)
CORS(app)

# Configuration MySQL Connection
connection = pymysql.connect(
    host='localhost',
    user='root',
    passwd='',
    database='learning_system',
    cursorclass=pymysql.cursors.DictCursor
)

@app.route('/')
def init_db():
    try: 
        with connection.cursor() as cursor:
            # Create courses table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS courses (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    description TEXT,
                    instructor VARCHAR(255),
                    price DECIMAL(5,2),
                    video_url VARCHAR(255),
                    thum_url VARCHAR(255)
                )
            ''')
            # Create Students table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                )
            ''')

            connection.commit()
            return jsonify({'message': "Databse initilise successfully!"})
    except Exception as e:
        return jsonify({'error': str(e)})
    

# Get data from database

# Get all courses
@app.route('/courses', methods=['GET'])
def get_courses():
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM courses")
            courses = cursor.fetchall()
            return jsonify(courses)
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)