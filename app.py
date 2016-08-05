from flask import Flask, render_template, redirect, url_for, request, session, flash, g
from functools import wraps
import sqlite3

app = Flask(__name__)

app.secret_key = "security flaw"
app.database = "sample.db"

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect (url_for('login'))
    return wrap

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/googlee2edb9889f3cbfd9.html')
def googleVerify():
    return render_template('googlee2edb9889f3cbfd9.html')

@app.route('/admin')
@login_required
def admin():
    g.db = connect_db()
    cur = g.db.execute('select * from posts')
    posts = [dict(title=row[0], description=row[1]) for row in cur.fetchall()]
    g.db.close()
    return render_template('admin.html', posts=posts)

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == "POST":
        if request.form['username'] != 'admin' or request.form ['password'] != 'password':
            error = 'Invalid credentials. Please try again.'
        else:
            session['logged_in'] = True
            flash('You were logged in!')
            return redirect(url_for('admin'))
    return render_template('login.html', error=error)

@app.route('/logout')
@login_required
def logout():
    session.pop('logged_in', None)
    flash('You were just logged out!')
    return redirect(url_for('login'))

def connect_db():
    return sqlite3.connect(app.database)
if __name__ == '__main__':
    app.run(debug=True)
