# Ni-Ma ML-server

## Machine learning service hosted on IBM cloud foundry

<p align="center">
    <a href="https://cloud.ibm.com">
        <img src="https://my1.digitalexperience.ibm.com/8304c341-f896-4e04-add0-0a9ae02473ba/dxdam/2d/2d559197-6763-4e47-a2cb-8f54c449ff26/ibm-cloud.svg" height="100" alt="IBM Cloud">
    </a>
</p>

<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-python-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>


# Deploy a Machine Learning Service application

In this application, we will create a Machine Learning Service application which will take the audio samples uploaded by the wireless sensor networks spread across the forest and process it to predict if the the audio sample contains a chainsaw sound or not.

This application depicts the implementation of a Machine Learning microservice using Flask. A microservice is an individual component of an application that follows the **microservice architecture** - an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. The microservice exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

## Steps

You can [deploy this application to IBM Cloud](https://cloud.ibm.com/developer/appservice/starter-kits/python-flask-app) or [build it locally](#building-locally) by cloning this repo first. After your app is live, you can access the `/predict` endpoint to build out your cloud native application.

### Deploying to IBM Cloud

<p align="center">
    <a href="https://cloud.ibm.com/developer/appservice/starter-kits/python-flask-app">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

Click **Deploy to IBM Cloud** to deploy this same application to IBM Cloud. This option creates a deployment pipeline, complete with a hosted GitLab project and a DevOps toolchain. You can deploy your app to Cloud Foundry, a Kubernetes cluster, or a Red Hat OpenShift cluster. OpenShift is available only through a standard cluster, which requires you to have a billable account.

[IBM Cloud DevOps](https://www.ibm.com/cloud/devops) services provides toolchains as a set of tool integrations that support development, deployment, and operations tasks inside IBM Cloud.

### Building locally

To get started building this application locally, you can either run the application natively or use the [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) for containerization and easy deployment to IBM Cloud.

#### Native application development

- Install [Python](https://www.python.org/downloads/)

Running Flask applications has been simplified with a `manage.py` file to avoid dealing with configuring environment variables to run your app. From your project root, you can download the project dependencies with (NOTE: If you don't have pipenv installed, execute: `pip install pipenv`):

```bash
pipenv install
```

To run your application locally:

```bash
python manage.py start
```

`manage.py` offers a variety of different run commands to match the proper situation:

- `start`: starts a server in a production setting using `gunicorn`.
- `run`: starts a native Flask development server. This includes backend reloading upon file saves and the Werkzeug stack-trace debugger for diagnosing runtime failures in-browser.
- `livereload`: starts a development server via the `livereload` package. This includes backend reloading as well as dynamic frontend browser reloading. The Werkzeug stack-trace debugger will be disabled, so this is only recommended when working on frontend development.
- `debug`: starts a native Flask development server, but with the native reloader/tracer disabled. This leaves the debug port exposed to be attached to an IDE (such as PyCharm's `Attach to Local Process`).

There are also a few utility commands:

- `build`: compiles `.py` files within the project directory into `.pyc` files

Your application is running at: `http://localhost:3000/` in your browser.

- Your [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/explorer`
- Your Swagger definition is running on: `/swagger/api`
- Health endpoint: `/predict`

There are two different options for debugging a Flask project:

1. Run `python manage.py runserver` to start a native Flask development server. This comes with the Werkzeug stack-trace debugger, which will present runtime failure stack-traces in-browser with the ability to inspect objects at any point in the trace. For more information, see [Werkzeug documentation](http://werkzeug.pocoo.org/).
2. Run `python manage.py debug` to run a Flask development server with debug exposed, but the native debugger/reloader turned off. This grants access for an IDE to attach itself to the process (i.e. in PyCharm, use `Run` -> `Attach to Local Process`).

You can also verify the state of your locally running application using the Selenium UI test script included in the `scripts` directory.

> **Note for Windows users:** `gunicorn` is not supported on Windows. You may start the server with `python manage.py run` on your local machine or build and start the Dockerfile.

#### IBM Cloud Deployment 

Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine by running the following command:

```
curl -sL https://ibm.biz/idt-installer | bash
```

Assuming you have completed ibmcloud-cli setup, Clone this repo


move in this repo and the type:

```bash
ibmcloud app push
```


## Next steps

- Learn more about the services and capabilities of [IBM Cloud](https://cloud.ibm.com).
- Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

