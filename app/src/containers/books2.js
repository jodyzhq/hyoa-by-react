/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [图书馆]
 */
// 引入样式
import style from  "../../public/style/books.css";
// 引入组件
import React, { Component } from 'react'

import { Left } from '../components/left'



class Books extends Component{

  render(){
    var data = [
      {
        books: 1
      },{
        books: 1
      },{
        books: 1
      }
    ]
    return (
      <div>
        <Left />
        <div className='right'>
          <div className='right-books'>
            <div className='title'>图书馆</div>
            <div className='query'>
              <input type='input' />
            </div>
            <div className='books-box'>
            {


               data.map( d => {
                return (
                  <div className='list'>
                    <div className='img'><img src='../build/images/books-img.png' /></div>
                    <div className='books-name'>JavaScript权威指南</div>
                    <div className='books-details'><span>内容简介：</span>
                  系统地讲解了JavaScript基础知识，并
针对ES6做了一部分讲解，适合作为参考书籍
                  </div>
                  <div className='books-group'>所属组：前端组</div>
                  <div className='books-state'>书籍状态：2017年1月10日，
                    被张三借阅
                  </div>
              </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Books }