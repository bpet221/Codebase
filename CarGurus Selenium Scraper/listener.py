from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run_scraper', methods=['POST'])
def run_scraper():
    data = request.get_json() or {}
    url = data.get("url","").strip()
    if not url:
        return jsonify({"error":"Missing URL"}),400

    # call our scraper
    proc = subprocess.run(
        ["python3", "cargurus_scraper.py", url],
        cwd="/Users/blakepetipas/Code Repos/Codebase/CarGurus Selenium Scraper",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=60
    )

    if proc.returncode != 0:
        return jsonify({"error": proc.stdout or proc.stderr}), 500

    price = proc.stdout.strip()
    return jsonify({"price": price})

if __name__ == '__main__':
    app.run(port=5001)