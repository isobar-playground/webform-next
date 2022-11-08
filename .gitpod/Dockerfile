# Use Gitpod VNC docker image.
FROM gitpod/workspace-full-vnc

# Keep cache in workspace.
ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Make sure that acl is present.
RUN sudo apt-get install acl gettext -y

# Install Cypress dependencies.
RUN sudo apt-get update \
 && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
   libgtk2.0-0 \
   libgtk-3-0 \
   libnotify-dev \
   libgconf-2-4 \
   libnss3 \
   libxss1 \
   libasound2 \
   libxtst6 \
   xauth \
   xvfb
