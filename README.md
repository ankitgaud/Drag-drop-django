<h1>Dash Board For Creating Web Pages(Drag and drop) Using Django and Javascript</h1>
<hr>
<h5>Dependencies</h5>
<ul>
  <li>Python 3.7.1</li>
  <li>Django 2.2.1</li>
  <li>Jquery and Ajax</li>
  <li>Html and css</li>
</ul>
<hr>
<h3>Tasks Completed:</h3>
<ul>
  <li>Start create webpage and pick the html element from collection of element and drop in devepoling box.</li>
  <li>We can add more tags into the box.</li>
  <li>After complete design of webpage, You can preview that webapage.</li>
  <li>On clicking Save button that webpage would be store in database after taking input as name of web page.</li>
  <li>On click button(see created webapage) list would be open in blank tag.</li>
  <li>From that list of webpages, we can see that webpage and save.</li>
</ul>
<hr>
<h3>Installation:</h3>
<ul>
  <li>Use pip or conda to install all above python-libraries</li>
  <li>Link css library and Link Jquery library</li>
  <li>Access on localhost:8000/</li>
</ul>
<hr>
<h3>Describe Module and Functions:</h3>
<h4>myapp/views.py</h4>
<ul>
  <li>Home()
    <ul>
      <li>url: <a href="#">localhost:8000/</a></li>
      <li>This funtion will render 'home.html'.</li>
    </ul>
  </li>
  <li>send_html_element_from_python_function()
    <ul>
      <li>url: <a href="#">localhost:8000/request/Element/</a></li>
      <li>This function would call through above url and response data after retieve from database.</li>
    </ul>
  </li>
  <li>request_element()
    <ul>
      <li>url: <a href="#">localhost:8000/request/element/</a></li>
      <li>On click button(add more element) for add specific tag then jquery and ajax function request data from above url and then above function give response. In this function, a variable is declared as string value. I used that variable directly.</li>
    </ul>
  </li>
  <li>save_file()
    <ul>
      <li>url: <a href="#">localhost:8000/savefile/<str:filename>/</a></li>
      <li>On click Save button then page code is read with javascript and send to above function through above url and then code would be save in database.</li>
    </ul>  
  </li>
  <li>Show_pages()
    <ul>
      <li>url: <a href="#">localhost:8000/show_pages/</a></li>
      <li>On click button(show created pages), this function would retrive all data and show data file names with render 'show_pages.html' template.</li>
    </ul>
  </li>
  <li>Open_pages()
    <ul>
      <li>url: <a href="#">localhost:8000/Open_page/</a></li>
      <li>If we want open any webpage, then click button present in list then above function retrieve data from database and send data through above url. </li>
    </ul>
  </li>
</ul>

<h4> myapp/models.py</h4>
<ul>
  <li>Document()
  <ul>
    <li>This django model is used to store Html tag file.</li>
  </ul>
  </li>
  <li>create_page()
  <ul>
    <li>This django model is used to save created page.</li>
  </ul>
  </li>
</ul>
<h4>static/home.js</h4>
<ul>
  <li>This static file is used by 'home.html'. Ajax and Jquery code is present in the same file and other javascript event is also present in this file.</li>
  </ul>
<h4>I used dynamic templates with extending html base file.</h4>  
<hr>
<h3>Instructions</h3>
<ul>
  <li>Run with 'python manage.py runserver'</li>
  <li>Make sure network connection(Jquery and css bootstrap library's online link are used. )</li>
</ul>



