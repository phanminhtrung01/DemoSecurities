$(document).ready(function () {

    let data_;

    let table = $('#bgtt').DataTable({
        ajax: function (dataSent, callback, settings) {
            $.ajax({
                url: 'index.aspx/GetDataAll',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
            }).done(function (res) {      
                callback({ data: res.d });
            }).fail(function () {
                return
            })
        },
        paging: false,
        //autoWight: false,
        initComplete: function (settings, json) {
            let api = this.api();
            let tb = $.connection.myHub;
            tb.client.displayStatus = function () {
                data_ = settings.aoData.map(function (item) {
                    return item._aData
                })
                api.ajax.reload();
            }

            $.connection.hub.start()
        },
        paging: false,
        columns: [
            { data: 'MACP' },
            {
                data: 'GTC',
                render: function (data, type, row, meta) {
                    let GTC = row['GTC']

                    return '<span style="color: #C910FF">' + (GTC + GTC * (7 / 100)).toFixed(3) + '</span>'
                }
            },
            {
                data: 'GTC',
                render: function (data, type, row, meta) {
                    let GTC = row['GTC']

                    return '<span style="color: #2D9EFF">' + (GTC - GTC * (7 / 100)).toFixed(3) + '</span>'
                }
            },
            {
                data: 'GTC',
                render: function (data, type, row, meta) {
                    return '<span style="color: #FFAA24">' + data.toFixed(3) + '</span>'
                }
            },
            {
                data: 'GMUA3',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }
                        
                    }

                    return data
                }
            },
            {
                data: 'SLMUA3',
                render: function (data, type, row, meta) { 

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }

                    }

                    return data

                }
            },
            {
                data: 'GMUA2',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'SLMUA2',
                render: function (data, type, row, meta) {

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'GMUA1',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'SLMUA1',
                render: function (data, type, row, meta) {
                    
                    let GTC = Number(row['GTC'])
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent
                    console.log(data_price)
                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (type === 'display') {

                        if (data_ !== undefined) {
                            is_highlight = data_[meta.row][strData] === data ? false : true
                        }

                        if (is_highlight) 
                        {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }
                        
                    }
                    
                    return data
                }
            },
            /* { data: 'SLMUA1' },*/
            {
                data: 'GIAKHOP',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data

                }
            },
            {
                data: 'SOLUONGKHOP',
                render: function (data, type, row, meta) {

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {                  
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight) 
                        }

                    }

                    return data

                }
            },
            {
                data: 'GBAN1',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data

                }
            },
            {
                data: 'SLBAN1',
                render: function (data, type, row, meta) {

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }

                    }

                    return data

                }
            },
            {
                data: 'GBAN2',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'SLBAN2',
                render: function (data, type, row, meta) {

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'GBAN3',
                render: function (data, type, row, meta) {

                    data = Number(data.toFixed(3))

                    let is_highlight = false
                    let strData = meta.settings.aoColumns[meta.col].data
                    let GTC = row['GTC']
                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data, meta, GTC, is_highlight) }, 600)
                            drawCell(data, meta, GTC, false)
                        } else {
                            drawCell(data, meta, GTC, is_highlight)
                        }

                    }

                    return data

                }
            },
            {
                data: 'SLBAN3',
                render: function (data, type, row, meta) {

                    let GTC = row['GTC']
                    let strData = meta.settings.aoColumns[meta.col].data
                    let is_highlight = false
                    let data_price = meta.settings.aoData[meta.row].anCells[meta.col - 1].textContent

                    data_price = Number(parseFloat(data_price).toFixed(3))

                    if (data_ !== undefined) {
                        is_highlight = data_[meta.row][strData] === data ? false : true
                    }

                    if (type === 'display') {
                        if (is_highlight) {
                            setTimeout(() => { drawCell(data_price, meta, GTC, is_highlight) }, 600)
                            drawCell(data_price, meta, GTC, false)
                        } else {
                            drawCell(data_price, meta, GTC, is_highlight)
                        }

                    }

                    return data
                }
            },
            {
                data: 'TONGSLKHOP',
                reder: function (data, type, row, meta) {
                    data = data.toFixed(3)

                    return data;
                }
            },
        ],
    });

    rederSearch()
    renderMode()

    $('#btn-light').click(function () {

        $('body').css("color", "black")
        $('.home').removeClass('mode-dark')
        $('.home').addClass('mode-light')
        $('table').removeClass('table-dark')
        $('table').addClass('table-light')
        $('#bgtt_filter').removeClass('hover-dark')
        $('#bgtt_filter').addClass('hover-light')
    })

    $('#btn-dark').click(function () {

        $('body').css("color", "white")
        $('.home').removeClass('mode-light')
        $('.home').addClass('mode-dark')
        $('table').removeClass('table-light')
        $('table').addClass('table-dark')
        $('#bgtt_filter').removeClass('hover-light')
        $('#bgtt_filter').addClass('hover-dark')


    })

    table.on('order.dt search.dt', function () {
        $(table.column(1).nodes()).addClass('dark');
        $(table.column(2).nodes()).addClass('dark');
        $(table.column(3).nodes()).addClass('dark');
        $(table.column(10).nodes()).addClass('dark');
        $(table.column(11).nodes()).addClass('dark');
        $(table.column(18).nodes()).addClass('dark');
    }).draw();

})

function hideCol() {
    for (var i = 0; i < 19; i++) {
        table.column(i).visible(false, false);
    }
    table.columns.adjust().draw(false);
}

function rederSearch() {
    let a = document.querySelector('#bgtt_filter label')
    a.childNodes[0].textContent = undefined
    let p = document.createElement('div');
    p.innerHTML = `<i class="bi bi-search"></i>`;
    a.appendChild(p)
    
    
}

function renderMode() {

    let a = document.querySelector('#bgtt_filter')
    let p = document.createElement('div');
    p.innerHTML = `<div class="menu-option">
            <div class="mode">
                <div class="mode-light">
                    <button id="btn-light" type="button" class="btn btn-light">
                        <i class="bi bi-brightness-high"></i>
                        <div>Light</div>
                    </button>
                </div>
                <div class="mode-dark">
                    <button id="btn-dark" type="button" class="btn btn-dark">
                        <i class="bi bi-brightness-high-fill"></i>
                        <div>Dark</div>
                    </button>
                </div>
            </div>
        </div>`
    a.appendChild(p)
}

function rederCell(meta, nClass) {
    let getNodePrice = meta.settings.aoData[meta.row].anCells[meta.col]
    if (getNodePrice !== undefined) {
        getNodePrice.classList.add(nClass)
    }

}

function drawCell(data, meta, GTC, check) {
    
    let GS = Number((GTC - GTC * (7 / 100)).toFixed(3))
    let GT = Number((GTC + GTC * (7 / 100)).toFixed(3))

    if (data > GTC && data !== GT) {
        check ? rederCell(meta, 'highlight-up') : rederCell(meta, 'txt-up')
    } else if (data < GTC && data !== GS) {
        check ? rederCell(meta, 'highlight-down') : rederCell(meta, 'txt-down');
    } else if (data === GTC) {
        check ? rederCell(meta, 'highlight-normal') : rederCell(meta, 'txt-ref')
    } else if (data === GT) {
        check ? rederCell(meta, 'highlight-ceil') : rederCell(meta, 'txt-ceil')
    } else if (data === GS) {
        check ? rederCell(meta, 'highlight-floor') : rederCell(meta, 'txt-floor')
    } else {
        rederCell(meta, 'txt-normal')
    }

}