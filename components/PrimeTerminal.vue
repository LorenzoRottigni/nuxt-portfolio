<template lang="pug">
Terminal.bg-dark.text-primary.border-primary(welcomeMessage="Welcome to my portfolio", prompt="portfolio.rottigni.tech@guest $")
</template>

<script>
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice';

export default {
    components: { Terminal },
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.$emit('response', response);
        }
    },
    mounted() {
        TerminalService.$on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.$off('command', this.commandHandler);
    }

}
</script>