import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, ButtonGroup, Table, TableHead, TableRow, TableBody, Paper, TableCell, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  inputStyle: {
    width: '30%',
    marginBottom: 20,
    marginRight: 10
  },
  toggleSize: {
    width: '100%',
  }
});

class EnhanceInputDialog extends Component {

  state = {
    searchInput: '',
    contentCount: 0,
    toastOpen: false,
    toastMessage: '',
    setToggle: 'all',
    getTable: {
      page: 0,
      setPage: 0,
      rowsPerPage: 10,
      setRowsPerPage: 10
    }
  }

  columns = [
    { id: 'name', label: '이름', minWidth: 200 },
    { id: 'item_cate', label: '분류', minWidth: 100 },
    {
      id: 'level',
      label: '레벨',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'mg_atk',
      label: '마력',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'atk',
      label: '공격력',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'str',
      label: 'str',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'dex',
      label: 'dex',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'luk',
      label: 'luk',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'int',
      label: 'int',
      minWidth: 60,
      align: 'right'
    },
    {
      id: 'hp',
      label: 'hp',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'mp',
      label: 'mp',
      minWidth: 60,
      align: 'right',
    },
  ]

  createData(name, item_cate, level, mg_atk, atk, str, dex, int, luk, hp, mp) {
    return { name, item_cate, level, mg_atk, atk, str, dex, int, luk, hp, mp };
  }

  rows = [
    this.createData('하이네스 원더러햇', '모자', 150, 0, 2, 40, 40, 0, 0, 360, 360),
    this.createData('이글아이 원더러코트', '상의', 150, 0, 2, 30, 30, 0, 0, 0, 0),
    this.createData('트릭스터 원더러팬츠', '하의', 150, 0, 2, 30, 30, 0, 0, 0, 0),
    this.createData('파프니르 펜리르탈론', '너클', 150, 0, 128, 40, 40, 0, 0, 0, 0),
    this.createData('파프니르 첼리스카', '건', 150, 0, 125, 40, 40, 0, 0, 0, 0),
    this.createData('파프니르 러스터캐논', '핸드캐논', 150, 0, 175, 40, 40, 0, 0, 360, 360),
  ]

  handleSetToggle = (event, value) => {
    this.setState({
      setToggle: value
    });
    console.log('value : ', value)
  }

  render() {

    const { classes, open, onClose, name } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          fullWidth
          maxWidth={"lg"}
        >
          <DialogTitle id="form-dialog-title">등록할 장비를 선택해주세요</DialogTitle>
          <DialogContent>
            
            <TextField
              className={classes.inputStyle}
              value={this.state.searchInput}
              color="primary"
              margin="normal"
              variant="outlined"
              id="title"
              placeholder="Search..."
            />
            <Paper className={classes.root}>

              <BottomNavigation
                  value={this.state.setToggle}
                  onChange={this.handleSetToggle}
                  showLabels
                  className={classes.toggleSize}
                  >
                <BottomNavigationAction label="전체" value="all"/>
                <BottomNavigationAction label="방어구" value="equip"/>
                <BottomNavigationAction label="무기" value="weapon"/>
              </BottomNavigation>              
              <div className={classes.tableWrapper}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                    {this.columns.map(column => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    // console.log(this.rows)
                    this.rows.slice(this.state.getTable.page * this.state.getTable.rowsPerPage, this.state.getTable.page * this.state.getTable.rowsPerPage + this.state.getTable.rowsPerPage).map(row => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                          {
                            this.columns.map(column => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? value.toString : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                  }
                  </TableBody>
                </Table>
              </div>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button 
                onClick={onClose} 
                color="primary"
                name = {name}
            >
                취소
            </Button>
            <Button 
                onClick={onClose}
                color="primary"
                name = {name}
            >
                등록
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceInputDialog);