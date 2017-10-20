import React from 'react'
import styled from 'styled-components';

const List = styled.ol`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	list-style: none;
	margin: 0;
    padding: 0;
`;

const Item = styled.li`
	font-size: 0.75rem;
	line-height: 1.25;
	text-transform: uppercase;
	letter-spacing: 0.0625rem;
	position: relative;
	padding: 0 0.5rem;

	& > a,
	& > span {
		display: block;
		text-decoration: none;
	}

	&::before {
		content: '>';
		position: absolute;
		left: -0.25rem;
	}

	&:first-child {
		padding-left: 0;

		&::before {
			content: '';
		}
	}
`;

export default ({ renderer, routes }) => (
	<nav role="navigation" aria-label="Breadcrumbs">
		<List>
			{renderer && routes && routes.length > 0 && routes.map(route => (
				<Item key={route.name}>
					{renderer(route)}
				</Item>
			))}
		</List>
	</nav>
);
