# API for Badges Website

## Config
  ```bash
    # clone the project
    git clone git@github.com:mauroquinteros/badges-api.git

    # install dependencies
    npm install

    # to run local environment
    npm run dev
  ```

## Development

  **BASE_URL = [http://localhost:3000/api/](http://localhost:3000/api/)**

## Production

  **BASE_URL = [https://api-badges.herokuapp.com/api/](https://api-badges.herokuapp.com/api/)**

## Entry points

- ### GET requests

  - **Attendants**

    **URL:** `BASE_URL/attendants/`

    **URL:** `BASE_URL/attendants/id/`

  - **Jobs**

    **URL:** `BASE_URL/jobs/`

    **URL:** `BASE_URL/jobs/id/`

- ### POST requests

  - **Attendants**

    **URL:** `BASE_URL/attendants/`

    **Request Body:**

    ```json
      {
        "first_name": "Name",
        "last_name": "Last Name",
        "email": "user@gmail.com",
        "twitter_user": "username",
        "id_job": 1
      }
    ```

  - **Jobs**

    **URL:** `BASE_URL/jobs/`

    **Request Body:**

    ```json
      {
        "job_title": "Job Description"
      }
    ```

- ### PUT requests

  - **Attendants**

    **URL:** `BASE_URL/attendants/id/`

    **Request Body:**

    ```json
      {
        "first_name": "Name",
        "last_name": "Last Name",
        "email": "user@gmail.com",
        "twitter_user": "username",
        "id_job": 1
      }
    ```

  - **Jobs**

    **URL:** `BASE_URL/jobs/id/`

    **Request Body:**

    ```json
      {
        "job_title": "Job Description"
      }
    ```

- ### DELETE requests

  - **Attendants**

    **URL:** `BASE_URL/attendants/id/`

  - **Jobs**

    **URL:** `BASE_URL/jobs/id/`

Develop by [@maurooquinteros](https://twitter.com/maurooquinteros) 💚
