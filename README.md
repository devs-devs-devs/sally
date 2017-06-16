# sally

sally is a chat bot built on the [Hubot][hubot] framework.

[hubot]: http://hubot.github.com

### Running sally Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the environment variables they rely on have been set.
Examples of the required environment variables can be found in `.env.example`.

You can start sally locally by running:

    % bin/hubot

You'll see some start up output and a prompt:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    sally>

Then you can interact with sally by typing `sally help`.

    sally> sally help
    sally help - Displays all of the help commands that sally knows about.
    ...