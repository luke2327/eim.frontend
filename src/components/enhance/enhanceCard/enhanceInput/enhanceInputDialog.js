import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Table, TableHead, TableRow, TableBody, Paper, TableCell, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import itemApi from 'libs/api/item';

const styles = () => ({
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
    marginRight: 10,
  },
  toggleSize: {
    width: '100%',
  },
});

@inject('enhance')
@observer
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
      rowsPerPage: 300,
      setRowsPerPage: 300,
    },
    itemList: [],
  }

  columns = [
    { id: 'name', label: '이름', minWidth: 200 },
    { id: 'item_cate', label: '분류', minWidth: 100 },
    { id: 'level', label: '레벨', minWidth: 60, align: 'right' },
    { id: 'mg_atk', label: '마력', minWidth: 60, align: 'right' },
    { id: 'atk', label: '공격력', minWidth: 60, align: 'right' },
    { id: 'str', label: 'str', minWidth: 60, align: 'right' },
    { id: 'dex', label: 'dex', minWidth: 60, align: 'right' },
    { id: 'luk', label: 'luk', minWidth: 60, align: 'right' },
    { id: 'int', label: 'int', minWidth: 60, align: 'right' },
    { id: 'hp', label: 'hp', minWidth: 60, align: 'right' },
    { id: 'mp', label: 'mp', minWidth: 60, align: 'right' },
  ]

  componentDidMount() {
    this.PostSearchData('all', '');
  }

  PostSearchData = async (cate, name) => {
    const data = {
      cate: cate,
      name: name,
    };

    return itemApi.getSearchItem(data).then((res) => {
      this.setState({
        itemList: res.data,
      });
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSetToggle = async (event, value) => {
    await this.setState({
      setToggle: value,
    });
    await this.PostSearchData(this.state.setToggle, this.state.searchInput);
  }

  handleEnterKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await this.PostSearchData(this.state.setToggle, this.state.searchInput);
    }
  }

  handleItemClick = (e, row) => {
    this.props.enhance.setItem(row);
    this.props.enhance.setSfCostInfo();
    this.props.clickItem();
  }

  render() {
    const { classes, open, onClose, name } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          fullWidth
          maxWidth={'lg'}
        >
          <DialogTitle id="form-dialog-title">등록할 장비를 선택해주세요</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.inputStyle}
              value={this.state.searchInput}
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterKeyPress}
              color="primary"
              margin="normal"
              variant="outlined"
              id="searchInput"
              placeholder="Search..."
            />
            <Paper className={classes.root}>

              <BottomNavigation
                value={this.state.setToggle}
                onChange={this.handleSetToggle}
                showLabels
                className={classes.toggleSize}
              >
                <BottomNavigationAction label="전체" value="all" />
                <BottomNavigationAction label="방어구" value="equip" />
                <BottomNavigationAction label="무기" value="weapon" />
              </BottomNavigation>
              <div className={classes.tableWrapper}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {this.columns.map((column) => (
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
                      this.state.itemList.slice(this.state.getTable.page * this.state.getTable.rowsPerPage, this.state.getTable.page * this.state.getTable.rowsPerPage + this.state.getTable.rowsPerPage).map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.item_no} onClick={(e) => this.handleItemClick(e, row)}>
                            {
                              this.columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? value.toString : value}
                                  </TableCell>
                                );
                              })
                            }
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
              name={name}
            >
              나가기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceInputDialog);
