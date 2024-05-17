# Website Summarizer API

This API takes in a website URL, fetches the content, and uses the OpenAI API to summarize the contents of the page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/website-summarizer-api.git
   cd website-summarizer-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. Start the server:
   ```bash
   node src/index.js
   ```

2. Make a POST request to the `/summarize` endpoint with a JSON body containing the website URL:
   ```bash
   curl -X POST https://hn-website-summarizer-api-6647acc9912fc9863059a974.srv.hanuman.build/summarize -H "Content-Type: application/json" -d '{"url": "https://example.com"}'
   ```

3. Example response:
   ```json
   {
     "summary": "This is the summarized content of the website."
   }
   ```

## API Endpoints

### POST /summarize

- **Description**: Summarizes the content of the provided website URL.
- **Request Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "summary": "This is the summarized content of the website."
  }
  ```