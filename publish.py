import os
import sys
import webbrowser
import json

length_of_arguments = len(sys.argv)
git_commit_message = str(sys.argv[1])


def error():
    print("\033[1;31m" "Could not commit to GitHub. Deploy failed." "\x1b[0m")
    sys.exit()


def success():
    print("\x1b[6;30;42m" "Success! Site is now being published to Netlify." "\x1b[0m")
    webbrowser.open("https://app.netlify.com/sites/tiffingrades/overview")
    webbrowser.open("https://tiffingrades.netlify.app")
    sys.exit()


def remove_extra_scripts():
    a_file = open("package.json", "r")
    json_object = json.load(a_file)
    json_object["scripts"]["start"] = "react-scripts start"
    json_object["scripts"]["build"] = "react-scripts build"

    a_file = open("package.json", "w")
    json.dump(json_object, a_file)
    a_file.close()


def frontend_deploy():
    try:
        os.system("npm run build")

        remove_extra_scripts()

        os.system("git add .")
        os.system(f"git commit -m {git_commit_message}")
        os.system("git push")

        success()
    except:
        sys.exit()


try:
    frontend_deploy()

except:
    sys.exit()
