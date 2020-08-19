FROM leadpier/pl3:phpV37312b

#user host mapping
ARG USER_ID
ARG GROUP_ID
ARG USER_DOCKER

RUN groupadd -g ${GROUP_ID} ${USER_DOCKER} &&\
    useradd -l -u ${USER_ID} -g ${USER_DOCKER} ${USER_DOCKER}

RUN mkdir -p /home/${USER_DOCKER}
RUN chown -R ${USER_DOCKER}:${USER_DOCKER} /home/${USER_DOCKER}

USER ${USER_DOCKER}

#supervisor
RUN mkdir -p /var/log/supervisor
CMD ["/usr/bin/supervisord"]