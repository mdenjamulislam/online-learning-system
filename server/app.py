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
                    instructor VARCHAR(255)
                )
            ''')

            connection.commit()
            return jsonify({'message': "Databse initilise successfully!"})
    except Exception as e:
        return jsonify({'error': str(e)})
    



if __name__ == '__main__':
    app.run(debug=True)