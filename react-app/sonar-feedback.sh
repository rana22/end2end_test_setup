#!/bin/bash
# sonar-feedback.sh
# Usage: ./sonar-feedback.sh <component-path>

# COMPONENT_PATH=$1
# PROJECT_KEY="my-app"
# SONAR_URL="http://localhost:9000"
# SONAR_TOKEN="sqa_1d25d56d621768daac5e0c9a10f2da18c3b4f126"
# OUTPUT_FILE="sonar-report.json"
# AI_PROMPT_FILE="sonar-feedback-prompt.txt"

# if [ -z "$COMPONENT_PATH" ]; then
#   echo "Usage: $0 <component-path>"
#   exit 1
# fi

# echo "Running SonarScanner..."
# sonar-scanner \
#   -Dsonar.projectKey=$PROJECT_KEY \
#   -Dsonar.sources=src \
#   -Dsonar.host.url=$SONAR_URL \
#   -Dsonar.login=$SONAR_TOKEN

# echo "Fetching issues for $COMPONENT_PATH..."
# curl -s -u $SONAR_TOKEN: \
#   "$SONAR_URL/api/issues/search?componentKeys=$PROJECT_KEY&componentRoots=$COMPONENT_PATH&resolved=false" \
#   > $OUTPUT_FILE

# echo "Formatting AI-friendly feedback..."
# # Use jq to parse JSON and include the file name
# jq -r '
#   .issues[] | 
#   "- [File: \(.component) | Line \(.line)] \(.message) (Severity: \(.severity))"
# ' $OUTPUT_FILE > $AI_PROMPT_FILE

# echo "AI-friendly SonarQube feedback saved to $AI_PROMPT_FILE"
# echo "Done."

#!/bin/bash
#!/bin/bash

COMPONENT_PATH="src"
PROJECT_KEY="my-app"
SONAR_URL="http://localhost:9000"
SONAR_TOKEN="sqa_1d25d56d621768daac5e0c9a10f2da18c3b4f126"
OUTPUT_FILE="sonar-report.json"
AI_PROMPT_FILE="sonar-feedback-prompt.txt"

run_sonar() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running SonarScanner..."
  sonar-scanner \
    -Dsonar.projectKey=$PROJECT_KEY \
    -Dsonar.sources=$COMPONENT_PATH \
    -Dsonar.host.url=$SONAR_URL \
    -Dsonar.login=$SONAR_TOKEN

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Fetching updated issues..."
  curl -s -u $SONAR_TOKEN: \
    "$SONAR_URL/api/issues/search?componentKeys=$PROJECT_KEY&componentRoots=$COMPONENT_PATH&resolved=false" \
    > $OUTPUT_FILE

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Formatting AI-friendly feedback..."
  jq -r '
    .issues[] | 
    "- [File: \(.component) | Line \(.line)] \(.message) (Severity: \(.severity))"
  ' $OUTPUT_FILE > $AI_PROMPT_FILE

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] AI-friendly SonarQube feedback saved to $AI_PROMPT_FILE"
}

# Initial run
run_sonar

# Watch src folder for changes
echo "Watching $COMPONENT_PATH for changes..."
fswatch -o $COMPONENT_PATH | while read f; do
  run_sonar
done
