'use strict';
/// <reference path="typings/tsd.d.ts"/>

const Grid = require('editable-grid');
const $ = require('jquery');

let dataGrid = [
        {
            id: 'id-1',
            WBS: '1',
            Name: 'Projeto Xpto',
            Start: '01/01/2016',
            End: '30/12/2016',
            children: [
                {
                    id: 'id-2',
                    WBS: '1.1',
                    Name: 'Analise',
                    Start: '01/01/2016',
                    End: '05/03/2016',
                    children: [
                        {
                            id: 'id-3',
                            WBS: '1.1.1',
                            Name: 'Requisitos',
                            Start: '01/01/2016',
                            End: '05/03/2016',
                            children: 'empty'
                        }
                    ]
                }
            ]
        },
        {
            id: 'id-10',
            WBS: '2',
            Name: 'Desenvolvimento',
            Start: '01/01/2017',
            End: '05/03/2017',
            children: 'empty'
        }
    ];


var grid = new Grid({
    treeMode: true, // <- note
    childData: function (parentId/*, parentObj*/) {     // <- note
        // child data can also be loaded asynchronously
        // the return for this function must be a deferred object
        // the return in the deferred object must be an array
        if (parentId === 'id-3') {
            return $.Deferred().resolve([
                {
                    id: 'id-10',
                    a: 'a-3',
                    b: 'b-3',
                    c: 'c-3'
                },
                {
                    id: 'id-11',
                    a: 'a-3',
                    b: 'b-3',
                    c: 'c-3'
                }
            ]);
        }
        return $.Deferred().resolve([]);
    },
    el: $('body'),
    columns: [
        {
            id: 'WBS',
            title: 'WBS',
            width: '10%'
        },
        {
            id: 'Name',
            title: 'Name',
            width: '40%'
        },
        {
            id: 'Start',
            title: 'Start',
            width: '25%'
        },
        {
            id: 'End',
            title: 'End',
            width: '25%'
        }
    ],
    data: dataGrid
    });

grid.render();