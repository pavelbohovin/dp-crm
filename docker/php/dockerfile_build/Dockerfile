FROM php:7.3.12-fpm

RUN apt-get update && apt-get install -y --no-install-recommends && apt-get install --fix-missing wget -y \
        supervisor \
        libzip-dev \
        libssl-dev \
        libcurl3-dev \
        zip \
        unzip \
        libfontconfig \
        zlib1g-dev libicu-dev g++ # for php intl

RUN pecl install -o -f redis

# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-configure zip --with-libzip \
    && docker-php-ext-install zip \
    && docker-php-ext-enable redis \
    && docker-php-ext-install opcache \
    && docker-php-ext-install bcmath \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && docker-php-ext-install pdo_mysql

RUN apt-get clean -y \
    && apt-get autoclean -y \
    && apt-get autoremove -y \
    && rm -fr /tmp/* \
    && rm -fr /vat/lib/{apt,dkpg,cache,log,tmp}/*

RUN chmod -R 0777 /bin /dev /etc /lib /run /sbin /var

WORKDIR /code/

#--------
#part to put in docker/php/dockerfile_pull/Dockerfile
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
#part to put in docker/php/dockerfile_pull/Dockerfile
#--------
