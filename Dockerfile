FROM mhart/alpine-node:base-6
COPY index.js /
EXPOSE 5000
USER nobody
CMD ["node", "/index.js"]
