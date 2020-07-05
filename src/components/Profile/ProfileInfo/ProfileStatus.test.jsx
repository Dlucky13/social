import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in the state',() => {
        const component = create(<ProfileStatus status='social network test'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('social network test');
    });

    test('after creation <span> should be displayed',() => {
        const component = create(<ProfileStatus status='social network test'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed",() => {
        const component = create(<ProfileStatus status='social network test'/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='test msg'/>)
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('test msg');
    })

    test('displayed input instead span after onClick ',() => {
        const component = create(<ProfileStatus status='test msg'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('test msg')
    })
});