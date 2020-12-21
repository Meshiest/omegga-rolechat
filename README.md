# rolechat plugin

A role chat plugin for [omegga](https://github.com/brickadia-community/omegga).

Send chat messages to your admins or moderators.

## Install

* `git clone https://github.com/meshiest/omegga-rolechat rolechat` in `plugins` directory

# Screenshot

Note: /ac is not the default command.

Note: Command not found message will be able to be hidden in the next version of brickadia.

![](https://i.imgur.com/dmK22Wh.png)

## Commands

The actual command is configurable but defaults to /rc for Admin role.

## Config

* `role` - The role that is allowed to chat with eachother. Host can always see all messages
* `command` - The name of the command that will be used, avoid using existing commands. Entering `ac` will make the command `/ac`
* `prefix` - Text that appears before adminchat messages
