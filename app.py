from flask import Flask, render_template, redirect, url_for, request, session, flash
from functools import wraps

app = Flask(__name__)

app.secret_key = "security flaw"

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
    return render_template('index.html')

@app.route('/scroll')
def scroll():
    return render_template('index.html')

@app.route('/admin')
@login_required
def admin():
    return render_template('admin.html')

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

if __name__ == '__main__':
    app.run(debug=True)
