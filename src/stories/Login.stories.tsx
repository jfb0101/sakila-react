import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login } from "../components/login/Login";
import {action} from '@storybook/addon-actions'


export default {
    title: 'Login'
} as ComponentMeta<typeof Login>

const Template : ComponentStory<typeof Login> = (args) => <Login {...args}/>

export const LoginDefault = Template.bind({})

LoginDefault.args = {
    onDoLogin: action('onDoLogin')
}