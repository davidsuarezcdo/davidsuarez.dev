import Vue from "vue";

import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(<unknown>fab as IconDefinition, <unknown>fas as IconDefinition);

Vue.component("font-awesome-icon", FontAwesomeIcon);
