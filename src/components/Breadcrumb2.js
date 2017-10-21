import React, { Component } from 'react';
import styled from 'styled-components';

const BreadcrumbSections = styled.div``;

const BreadcrumbSection = styled.div`
  display:inline-block;
  cursor:pointer;
  font-family:sans-serif;
  text-decoration:none;
  border: 0;
  border-radius: 0;
  outline: none;
  font-size: 13px;
`;

const Link = styled.a`
  padding: 8px 4px 8px 4px;
  text-decoration:none;
  color:#4682B4;
`
const BreadcumbArrow = styled.div`
  padding: 8px 10px 8px 10px;
  color:#bbbbbb;
  display:inline-block;
`


class Breadcrumb2 extends Component {

  render() {
    const breadcrumbs = this.props.breadcrumbs;
    return (
      <BreadcrumbSections>
        {
          breadcrumbs.map(( breadcrumb, index ) => {
            return (
              <BreadcrumbSection key={index}>
                <Link href={breadcrumb.link}>{breadcrumb.name}</Link>
                { breadcrumbs.length - index > 1 ? <BreadcumbArrow>&gt;</BreadcumbArrow>: ''}
              </BreadcrumbSection>
            )
          })
        }
      </BreadcrumbSections>
    );
  }
}

export default Breadcrumb;
